# Generated by Django 4.0.3 on 2023-07-25 22:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0003_remove_technician_id_alter_technician_employee_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointment',
            name='status',
            field=models.CharField(choices=[('created', 'created'), ('canceled', 'canceled'), ('finished', 'finished')], default='created', max_length=20),
        ),
        migrations.AlterField(
            model_name='technician',
            name='employee_id',
            field=models.PositiveIntegerField(primary_key=True, serialize=False),
        ),
        migrations.DeleteModel(
            name='Status',
        ),
    ]
