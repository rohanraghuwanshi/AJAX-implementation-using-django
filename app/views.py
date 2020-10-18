from django.shortcuts import render
from django.http import HttpResponse
import json

from .models import Book
from .serializers import BookSerializer

# Create your views here.


def index(request):
    return render(request, "index.htm")


def saveBook(request):
    name = request.GET['name']
    price = request.GET['price']
    pages = request.GET['pages']

    book = Book(name=name, price=price, pages=pages)

    try:
        book.save()
        return HttpResponse("true")
    except:
        return HttpResponse("false")


def getAllBooks(request):
    books = Book.objects.all()
    booksList = list()

    for b in books:
        bookserializer = BookSerializer(b)
        booksList.append(bookserializer.data)

    return HttpResponse(json.dumps(booksList))