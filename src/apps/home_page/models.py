from django.db import models

class Group(models.Model):
    group_name = models.CharField(max_length=6)


class User(models.Model):
    first_name = models.CharField(max_length=15)
    last_name = models.CharField(max_length=30)
    surname = models.CharField(max_length=30)
    novsu_login = models.CharField(max_length=10)
    group = models.ForeignKey(Group, on_delete=models.CASCADE)