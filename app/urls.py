from django.urls import path

from .views import index, saveBook

urlpatterns = [
    path('', index, name="index"),
    path('save-book/', saveBook, name='saveBook'),
]
