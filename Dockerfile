FROM python:3.7

WORKDIR /app

COPY Pip* /app/

RUN pip install --upgrade pip && \
    pip install pipenv && \
    pipenv install --deploy --system


EXPOSE 7501


# Use the following command to test it on Flask Server for dev purposes
CMD ["python", "routes.py"]
