from django.http import JsonResponse
from .models import Device, Part

# Create your views here.
def getCommand(request):
    endpoints = {
        "api/devices": "All devices"
    }

    return JsonResponse(endpoints)


def getDevices(requests):
    devices = Device.objects.all()

    serialised_devices = []

    for device in devices:
        serialised_devices.append(device.serializer())

    return JsonResponse(serialised_devices, safe=False) # a serializált elemeket adjuk vissza
