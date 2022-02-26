from rest_framework import serializers
from .models import Workplan



class WorkplanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workplan
        fields = ('id', 'goal','objectives', 'start_time', 'end_time', 'resources', 'strategy', 'created_at')
