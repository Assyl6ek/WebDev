from django.shortcuts import render
from api.models import Company, Vacancy
from django.http import JsonResponse

# Create your views here.
def company(request):
    company_list = Company.objects.all()
    json_company_list = [c.to_json() for c in company_list]
    return JsonResponse(json_company_list, safe=False)

def company_details(request, primary):
    try:
        company = Company.objects.get(id=primary)
    except Company.DoesNotExist as e:
        return JsonResponse({'error: ': str(e)})
    return JsonResponse(company.to_json(), safe=False)

def vacancy(request):
    vacancy_list = Vacancy.objects.all()
    json_vacancy = [vacancy.to_json() for vacancy in vacancy_list]
    return JsonResponse(json_vacancy, safe=False)

def vacancies_by_company(request, foreign):
    try:
        company = Company.objects.get(id=foreign)
    except Company.DoesNotExist as e:
        return JsonResponse({'error: ': str(e)})
    company_vacancy = company.comp.all()
    json_vacancies_by_company = [vacancy.to_json() for vacancy in company_vacancy]
    return JsonResponse(json_vacancies_by_company, safe=False)

def vacancyDetails(request, primary):
    try:
        vacancy_by_id = Vacancy.objects.get(id=primary)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error: ': str(e)})
    return JsonResponse(vacancy_by_id.to_json(), safe=False)

def vacancies_by_salary(request):
    try:
        vacancy_list = Vacancy.objects.order_by('-salary')
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error: ': str(e)})
    json_vacancies = [vacancy.to_json() for vacancy in vacancy_list[:10]]
    return JsonResponse(json_vacancies, safe=False)

