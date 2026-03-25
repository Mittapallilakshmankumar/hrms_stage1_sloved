
# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from django.contrib.auth.hashers import check_password
# from app1.models import Employee   # 🔥 change if needed

# @api_view(['POST'])
# def login_view(request):
#     email = request.data.get('email')
#     password = request.data.get('password')

#     try:
#         employee = Employee.objects.get(email=email)

#         # if check_password(password, employee.password):
#         if password == employee.password:
#             return Response({
#                 "message": "Login success",
#                 "name": employee.name,
#                 "employee_id": employee.employee_id,
#                 "role": "employee"
#             })
#         else:
#             return Response({"error": "Invalid password"}, status=400)

#     except Employee.DoesNotExist:
#         return Response({"error": "User not found"}, status=404)




from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.hashers import check_password
from app1.models import Employee   # 🔥 change if needed

@api_view(['POST'])
def login_view(request):
    email = request.data.get('email')
    password = request.data.get('password')

    try:
        employee = Employee.objects.get(email=email)

        # if check_password(password, employee.password):
        if password == employee.password:
            return Response({
                "message": "Login success",
                "name": employee.name,
                "employee_id": employee.employee_id,
                "department": employee.department,   # 🔥 ADD THIS
                "role": "employee"
            })
        else:
            return Response({"error": "Invalid password"}, status=400)

    except Employee.DoesNotExist:
        return Response({"error": "User not found"}, status=404)