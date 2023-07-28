# Generated by Django 4.0.3 on 2023-07-25 01:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointment',
            name='status',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='appointments', to='service_rest.status'),
        ),
    ]
