# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponseRedirect, HttpResponse
from django.conf import settings
from django.core.files.storage import FileSystemStorage

def index(request):
    return render(request, 'runmate/index.html', {})


