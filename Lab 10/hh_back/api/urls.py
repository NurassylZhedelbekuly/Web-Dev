from django.urls import path, include
from rest_framework import routers

from .views import *


router_c = routers.SimpleRouter()
router_c.register(r'companies', CompanyViewSet)
router_v = routers.SimpleRouter()
router_v.register(r'vacancies', VacancyViewSet)

urlpatterns = [
    path('companies/<int:company_id>/vacancies/', VacancyByCompanyList.as_view()),
    path('vacancies/top_ten/', VacancyTopList.as_view()),
    path('', include(router_c.urls)),
    path('', include(router_v.urls)),
]
