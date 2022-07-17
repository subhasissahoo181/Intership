from time import timezone
from turtle import title
import django
from django.db import models
from django.utils import timezone

# Create your models here.
from django.contrib.auth.models import User

class Post(models.Model):
    title=models.CharField(max_length=100)
    content=models.TextField()
    date_posted=models.DateTimeField(default=timezone.now)
    author=models.ForeignKey(User, on_delete=models.CASCADE)