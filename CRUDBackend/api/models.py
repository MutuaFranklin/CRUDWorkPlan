from django.db import models

class Workplan(models.Model):
    goal = models.CharField(max_length=50)
    objectives = models.TextField()
    start_time = models.DateField()
    end_time = models.DateField()
    resources = models.TextField()
    strategy = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

   
    def __str__(self):
       return self.goal

    class Meta:
        ordering = ['created_at']