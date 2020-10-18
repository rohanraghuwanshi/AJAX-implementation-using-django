from rest_framework import serializers


class BookSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField(max_length=50)
    price = serializers.IntegerField()
    pages = serializers.IntegerField()