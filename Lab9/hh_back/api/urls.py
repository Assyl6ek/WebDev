from django.urls import path
from api import views

urlpatterns = [
    path('companies/', views.company),
    path('companies/<int:primary>/', views.company_details),
    path('vacancies/', views.vacancy),
    path('companies/<int:foreign>/vacancies/', views.vacancies_by_company),
    path('vacancies/<int:primary>', views.vacancyDetails),
    path('vacancies/top10/', views.vacancies_by_salary)
]