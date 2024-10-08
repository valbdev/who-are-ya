## Back-end (Python FastAPI) Dockerfile

# Uses official Python base image
FROM python:3.9

# Sets working directory
WORKDIR /code

# Copies requirements file to /code
COPY ./requirements.txt /code/requirements.txt

# Installs the required packages (disabling the cache and possibly upgrading them)
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

# Copies app code to /code
COPY ./who-are-ya /code/who-are-ya

# Runs Uvicorn ASGI server on port 8000
CMD ["fastapi", "run", "who-are-ya/api.py", "--port", "8000"]