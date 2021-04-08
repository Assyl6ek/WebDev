from django.urls import path
from new.views import productList, productDetails, categories, categoryDetails

urlpatterns = [
    path('products/', productList),
    path('products/<int:productId>', productDetails),
    path('category/', categories),
    path('category/<int:categoryId>', categoryDetails),
]