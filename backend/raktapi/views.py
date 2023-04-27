from django.http import JsonResponse

# Create your views here.
def getCommand(request):
    endpoints = {
        "api/csomagok": "Minden egyes csomag"
    }

    return JsonResponse(endpoints)

