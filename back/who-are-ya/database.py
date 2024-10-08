from pathlib import Path
import sqlite3
import pandas as pd
import logging

DB_FILENAME = "./who-are-ya/players.db"

def init_db():
    '''Creates database if it is not already created'''
    if not Path(DB_FILENAME).is_file:
        Path(DB_FILENAME).touch()

def load_csv_to_db():
    '''Populates the database. Binds the values of the CSV file with SQL columns in the database'''
    init_db()
    connection = sqlite3.connect(DB_FILENAME)
    cursor = connection.cursor()
    cursor.execute(''' CREATE TABLE IF NOT EXISTS Players (name text, nation text, pos text, squad text, age text, born int, pid text, sid text, flag text, league text, lid int)''')
    player_data = pd.read_csv('./who-are-ya/players.csv')
    player_data.columns = ['name', 'nation', 'pos', 'squad', 'age', 'born', 'pid', 'sid', 'flag', 'league', 'lid']
    player_data.to_sql('Players', connection, if_exists='append', index=False)

def table_exists(cursor):
    cursor.execute('''
        SELECT count(name) FROM sqlite_master WHERE type='table' AND
        name='Players' ''')    
    if not cursor.fetchone()[0]:
        return False
    return True
    
def get_player_by_id_f(player_id):
    '''Returns a player given her id'''
    connection = sqlite3.connect(DB_FILENAME)
    cursor = connection.cursor()
    if(not table_exists(cursor)):
        load_csv_to_db()
    cursor.execute(f'SELECT * FROM Players WHERE pid = "{player_id}"')
    return cursor.fetchone()

def get_players_by_name_f(player_name: str):
    '''Returns a list of players whose name resembles player_name'''
    connection = sqlite3.connect(DB_FILENAME)
    cursor = connection.cursor()
    if(not table_exists(cursor)):
        load_csv_to_db()
    cursor.execute(f'SELECT * FROM Players WHERE name LIKE "%{player_name}%"')
    return cursor.fetchall()

def get_random_player_id_f():
    '''Returns a random player id from the database'''
    connection = sqlite3.connect(DB_FILENAME)
    cursor = connection.cursor()
    if(not table_exists(cursor)):
        load_csv_to_db()
    cursor.execute(f'SELECT * FROM Players ORDER BY RANDOM() LIMIT 1')
    return cursor.fetchone()

def get_all_players_f():
    '''Returns all the players in the database'''
    connection = sqlite3.connect(DB_FILENAME)
    cursor = connection.cursor()
    if(not table_exists(cursor)):
        load_csv_to_db()
    cursor.execute(f'SELECT * FROM Players')
    return cursor.fetchall()