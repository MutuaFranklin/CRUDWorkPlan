from django.urls.conf import include
from . import views
from django.conf.urls.static import static
from django.urls import path, re_path
from django.conf import settings
from rest_framework_swagger.views import get_swagger_view
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi




schema_view = get_schema_view(
    openapi.Info(
        title="Workplan API",
        default_version='v1',
        description="API to access workplan",
        terms_of_service="",
        contact=openapi.Contact(email="franklinmutua@outlook.com"),
        license=openapi.License(name="Widget License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

# schema_view = get_swagger_view(title='Pastebin API')

urlpatterns = [
    re_path(r'^doc(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path('doc/', schema_view.with_ui('swagger', cache_timeout=0),name='schema-swagger-ui'),  
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0),name='schema-redoc'), 
    path('swagger/', schema_view),
    path('workplan/', views.WorkPlanList.as_view()),
    path('workplan-goal/<pk>', views.WorkplanGoalDetail.as_view()),

]
