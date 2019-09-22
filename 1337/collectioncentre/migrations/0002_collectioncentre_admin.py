# Generated by Django 2.2.5 on 2019-09-21 14:28

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('collectioncentre', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name='collectioncentre',
            name='admin',
            field=models.ForeignKey(limit_choices_to={'user_type': 'C'}, on_delete=django.db.models.deletion.PROTECT, related_name='CC_Admin', to=settings.AUTH_USER_MODEL),
        ),
    ]
