from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Article(models.Model):
    title = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    post = models.TextField()
    image = models.ImageField(upload_to='post_images',null=True)
    author = models.ForeignKey(User,related_name="articles",on_delete=models.CASCADE,null=True)
    created_at = models.DateTimeField(auto_now_add=True)