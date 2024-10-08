from typing import Optional
from fastapi import FastAPI, Path, HTTPException, status
from pydantic import BaseModel
from database import get_player_by_id_f, get_players_by_name_f, get_random_player_id_f, get_all_players_f
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:4200"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api")
def root():
    raise HTTPException(status_code=status.HTTP_200_OK,  
                        detail="Welcome to PlayersAPI")

@app.get("/api/player/{id}")
def get_player_by_id(id: str):
    player = get_player_by_id_f(id)
    if not player: 
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, 
                            detail="Player not found")
    return {"name": player[0],
            "nation": player[1],
            "pos": player[2],
            "squad": player[3],
            "age": player[4], 
            "born": player[5], 
            "pid": player[6], 
            "sid": player[7],
            "flag": player[8],
            "league": player[9],
            "lid": player[10]}

@app.get("/api/player/random/")
async def get_random_player_id():
    player = get_random_player_id_f()
    return {"name": player[0],
            "nation": player[1],
            "pos": player[2],
            "squad": player[3],
            "age": player[4], 
            "born": player[5], 
            "pid": player[6], 
            "sid": player[7],
            "flag": player[8],
            "league": player[9],
            "lid": player[10]}

@app.get("/api/players/{name}")
def get_players_by_name(name: str):
    players = get_players_by_name_f(name)
    if len(players)==0:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, 
                            detail="No player was found")
    list = []
    for p in players:
        list.append({"name": p[0],
            "nation": p[1],
            "pos": p[2],
            "squad": p[3],
            "age": p[4], 
            "born": p[5], 
            "pid": p[6], 
            "sid": p[7],
            "flag": p[8],
            "league": p[9],
            "lid": p[10]})
    return list

@app.get("/api/players/all/")
async def get_all_players():
    players = get_all_players_f()
    if len(players)==0:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, 
                            detail="No player was found")
    list = []
    for p in players:
        list.append({"name": p[0],
            "nation": p[1],
            "pos": p[2],
            "squad": p[3],
            "age": p[4], 
            "born": p[5], 
            "pid": p[6], 
            "sid": p[7],
            "flag": p[8],
            "league": p[9],
            "lid": p[10]})
    return list
