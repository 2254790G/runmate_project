# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponseRedirect, HttpResponse
from django.conf import settings
from django.core.files.storage import FileSystemStorage

def index(request):
    return render(request, 'runmate/index.html', {})

#def upload(request):
 #   if request.method == 'POST':
  #      uploaded_file = request.FILES['xmlFile']
   #     print(uploaded_file.name)
    #    print(uploaded_file.size)
        
    #return render(request, 'runmate/index.html', {})

