from rest_framework import routers, urlpatterns
from .api import AllArticleViewSet,ArticleViewSet

router = routers.DefaultRouter()
router.register('api/allarticles',AllArticleViewSet,'articles')
router.register('api/articles',ArticleViewSet,'articles')
urlpatterns = router.urls