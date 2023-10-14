from django.db import models

class Group(models.Model):
    group_name = models.CharField(max_length=6)
    href       = models.CharField(max_length=70)


class User(models.Model):
    username    = models.CharField(max_length=25)
    first_name  = models.CharField(max_length=15)
    last_name   = models.CharField(max_length=30)
    surname     = models.CharField(max_length=30)
    novsu_login = models.CharField(max_length=10)
    group       = models.ForeignKey(Group, on_delete=models.CASCADE)