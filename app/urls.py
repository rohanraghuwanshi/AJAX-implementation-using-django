from django.urls import path

from .views import index, saveBook, getAllBooks, deleteBook

urlpatterns = [
    path('', index, name="index"),
    path('save-book/', saveBook, name='saveBook'),
    path('getAllBooks/', getAllBooks, name='getAllBooks'),
    path('delete-book/', deleteBook, name='delete-book'),
]
