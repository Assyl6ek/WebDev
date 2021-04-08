from django.shortcuts import render
from new.models import Product, Category
from django.http.response import JsonResponse
# Create your views here.

def productList(request):
    products = Product.objects.all()
    products_json = [product.to_json() for product in products]
    return JsonResponse(products_json, safe=False)

def categories(request):
    categories=Category.objects.all()
    categories_json =[c.to_json() for c in categories]
    return JsonResponse(categories_json, safe=False)


def productDetails(request, productId):
    try:
        product = Product.objects.get(id=productId)
    except Product.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, safe=False)
    return JsonResponse(product.to_json(), safe=False)

def categoryDetails(request, categoryId):
    try:
        category=Category.objects.get(id=categoryId)
    except Category.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, safe=False)
    return JsonResponse(category.to_json(), safe=False)

p1 = Product(id=1,
            name='Sapiens: A Brief History of Humankind',
            price=14.99,
            description='From a renowned historian comes a groundbreaking narrative of humanitys creation and evolution - a number one international best seller - that explores the ways in which biology and history have defined us and enhanced our understanding of what it means to be «human».',
            count=5,
            is_active=True)
p2 = Product(id=2,
            name='The Theory of Everything: The Origin and Fate of the Universe',
            price=9.99,
            description='In physicist Stephen Hawkings brilliant opus, A Brief History of Time, he presented us with a bold new look at our universe, how it began, and how our old views of physics and tired theories about the creation of the universe were no longer relevant.',
            count=7,
            is_active=True)
p3 = Product(id=3,
            name='The Idea of the Brain: The Past and Future of Neuroscience',
            price=19.99,
            description='An «elegant», «engrossing» (Carol Tavris, Wall Street Journal) examination of what we think we know about the brain and why - despite technological advances - the workings of our most essential organ remain a mystery.',
            count=2,
            is_active=True)
p4 = Product(id=4,
            name='The Selfish Gene',
            price=8.16,
            description='Richard Dawkins brilliant reformulation of the theory of natural selection has the rare distinction of having provoked as much excitement and interest outside the scientific community as within it. His theories have helped change the whole nature of the study of social biology',
            count=8,
            is_active=True)
# p3.save()

c1 = Category(name="books")
c2 = Category(name="bikes")

# c2.save()
# Category.objects.filter(id=3).delete()