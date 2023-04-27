from django.http import JsonResponse

# Create your views here.
def getCommand(request):
    endpoints = {
        "api/devices": "All devices"
    }

    return JsonResponse(endpoints)

