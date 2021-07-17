from rest_framework import viewsets, permissions
from .serializers import ArticleSerializers
from articles.models import Article

class AllArticleViewSet(viewsets.ModelViewSet):
    
    queryset=Article.objects.all()
    permission_classes=[
        permissions.AllowAny
    ]
    serializer_class=ArticleSerializers

class ArticleViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = ArticleSerializers
    def get_queryset(self):
        return self.request.user.articles.all()
    def perform_create(self, serializer):
        serializer.save(author=self.request.user)