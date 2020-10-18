from django.shortcuts import render
from django.http import HttpResponse

from .models import Book

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