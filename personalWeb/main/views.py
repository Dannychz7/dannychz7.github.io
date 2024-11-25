from django.shortcuts import render
from django.http import HttpResponse
from datetime import datetime

# Create your views here.
def main(request):
    return render(request, 'main/home.html', {'today': datetime.today()})
