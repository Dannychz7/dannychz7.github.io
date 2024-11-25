from django.shortcuts import render
from django.http import HttpResponse
from datetime import datetime
import os 

# Create your views here.
def main(request):
    # Path to your template file
    template_path = os.path.join('main', 'templates', 'main', 'home.html')
    
    # Get the last modified time of the template file
    last_modified_timestamp = os.path.getmtime(template_path)
    
    # Convert it to a human-readable format
    last_edited = datetime.fromtimestamp(last_modified_timestamp).strftime('%B %d, %Y')
    
    return render(request, 'main/home.html', {'last_edited': last_edited})
