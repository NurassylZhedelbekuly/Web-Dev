from django.db import models


class Company(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    city = models.CharField(max_length=255)
    address = models.TextField(blank=True)

    def __str__(self):
        return self.name

    def to_json(self):
        return {
            'id': self.pk,
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address,
        }


class Vacancy(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    def to_json(self):
        return {
            'id': self.pk,
            'name': self.name,
            'description': self.description,
            'salary': self.salary,
            'company': self.company.to_json(),
        }
