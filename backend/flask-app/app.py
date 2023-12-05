import mysql.connector
import time
from flask import Flask, make_response, jsonify, request

time.sleep(45)

mydb = mysql.connector.connect(
    host='mysql',
    user='admin',
    password='admin',
    database='pataponto'
)

app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello World from Flask!'

@app.route('/api/register_user', methods=['POST'])
def register_user():
    user = request.json

    my_cursor_users = mydb.cursor()
    insert_user = f'INSERT INTO users (email, name, password) VALUES ("{user["email"]}", "{user["name"]}", "{user["password"]}")'
    my_cursor_users.execute(insert_user)
    mydb.commit()

    return make_response(
        jsonify(
            msg='Cadastro realizado com sucesso.',
            data=user
        )
    )

@app.route('/api/get_user', methods=['GET'])
def get_user():
    my_cursor_users = mydb.cursor()
    my_cursor_users.execute('SELECT id, name, email, password FROM users')
    db_users = my_cursor_users.fetchall()

    users = list()
    for user in db_users:
        users.append(
            {
                'id': user[0],
                'name': user[1],
                'email': user[2],
                'password': user[3]
            }
        )
    return make_response(
        jsonify(
            msg='users.',
            data=users
        )
    )

@app.route('/api/get_travels', methods=['GET'])
def get_travels():
    my_cursor_trips = mydb.cursor()
    my_cursor_trips.execute('SELECT id, destination, departure_date, return_date, price FROM trips')
    db_trips = my_cursor_trips.fetchall()
    trips = list()
    for trip in db_trips:
        trips.append(
            {
                'id': trip[0],
                'destination': trip[1],
                'partida': trip[2],
                'volta': trip[3],
                'preco': trip[4]
            }
        )
    return make_response(
        jsonify(
            msg='trips.',
            data=trips
        )
    )

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
