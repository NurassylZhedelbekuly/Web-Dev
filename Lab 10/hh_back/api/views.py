from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from .models import Company, Vacancy
from .serializers import CompanySerializer, CompanyModelSerializer, VacancyModelSerializer
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from rest_framework import viewsets, generics, mixins, status


class VacancyViewSet(viewsets.ModelViewSet):
    queryset = Vacancy.objects.all()
    serializer_class = VacancyModelSerializer


class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanyModelSerializer


#################################################################################

class VacancyTopList(generics.ListAPIView):
    queryset = Vacancy.objects.all().order_by('-salary')[:10]
    serializer_class = VacancyModelSerializer


class VacancyByCompanyList(mixins.ListModelMixin,
                           mixins.CreateModelMixin,
                           GenericAPIView):

    def create(self, request, *args, **kwargs):
        request.data["company"] = kwargs["company_id"]
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

    serializer_class = VacancyModelSerializer

    def get_queryset(self):
        return Vacancy.objects.filter(company_id=self.kwargs["company_id"])
