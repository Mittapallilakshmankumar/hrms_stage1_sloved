from rest_framework.decorators import api_view
from rest_framework.response import Response
from datetime import datetime
from .models import Attendance
from .serializers import AttendanceSerializer


# 🔥 CHECK-IN
@api_view(['POST'])
def check_in(request):
    Attendance.objects.create(
        name=request.data.get('name'),
        check_in=datetime.now().time(),
        notes=request.data.get('notes', "")
    )
    return Response({"msg": "Check-in saved"})


# 🔥 CHECK-OUT
@api_view(['POST'])
def check_out(request):
    obj = Attendance.objects.filter(
        name=request.data.get('name'),
        date=datetime.now().date()
    ).last()

    if obj:
        obj.check_out = datetime.now().time()
        obj.summary = request.data.get('summary', "")
        obj.save()
        return Response({"msg": "Check-out saved"})

    return Response({"error": "No check-in found"})


# 🔥 GET
@api_view(['GET'])
def attendance_list(request):
    data = Attendance.objects.all().order_by('-date')
    serializer = AttendanceSerializer(data, many=True)
    return Response(serializer.data)

from datetime import date
from .models import Attendance

@api_view(['GET'])
def admin_dashboard(request):
    today = date.today()

    # total employees (unique names)
    total_employees = Attendance.objects.values('name').distinct().count()

    today_attendance = Attendance.objects.filter(date=today)

    # present = checked in
    present = today_attendance.filter(check_in__isnull=False).count()

    # absent = not checked in
    absent = total_employees - present

    # half day (less than 4 hrs)
    half_day = 0
    for att in today_attendance:
        if att.check_in and att.check_out:
            hours = (
                (att.check_out.hour * 60 + att.check_out.minute) -
                (att.check_in.hour * 60 + att.check_in.minute)
            ) / 60

            if hours < 4:
                half_day += 1

    return Response({
        "total": total_employees,
        "present": present,
        "absent": absent,
        "half_day": half_day
    })