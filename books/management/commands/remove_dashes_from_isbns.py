from django.core.management.base import BaseCommand
from books.models import Book

class Command(BaseCommand):
    help = 'Remove dashes from ISBN book records.'

    def handle(self, *args, **options):
        print('Hello')
