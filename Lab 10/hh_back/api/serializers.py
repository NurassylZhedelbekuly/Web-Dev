from rest_framework.renderers import JSONRenderer
from rest_framework import serializers

from .models import Vacancy, Company


class VacancySerializer(serializers.Serializer):
    name = serializers.CharField(max_length=255)
    description = serializers.CharField()
    salary = serializers.FloatField()
    company_id = serializers.IntegerField()

    def create(self, validated_data):
        return Vacancy.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get("name", instance.name)
        instance.description = validated_data.get("description", instance.description)
        instance.salary = validated_data.get("salary", instance.salary)
        instance.company_id = validated_data.get("company_id", instance.company_id)
        instance.save()
        return instance


class CompanySerializer(serializers.Serializer):
    name = serializers.CharField(max_length=255)
    description = serializers.CharField()
    city = serializers.CharField()
    address = serializers.CharField()

    def create(self, validated_data):
        return Company.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get("name", instance.name)
        instance.description = validated_data.get("description", instance.description)
        instance.city = validated_data.get("city", instance.city)
        instance.address = validated_data.get("address", instance.address)
        instance.save()
        return instance


class VacancyModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = "__all__"


class CompanyModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = "__all__"
