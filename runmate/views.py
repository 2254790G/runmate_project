# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse

def index(request):
    return HttpResponse("Start page for RunMate")

def dataView(request):
    return HttpResponse("Loaded info on page for RunMate")
