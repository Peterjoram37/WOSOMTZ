from flask import Flask, jsonify, request
import requests

app = Flask(__name__)

# Token yako ya API
token = "WhMHatVCubHxkBsoKL5sa4s9F9yL9Dp3puGTl4bq7PCBKGGrKnNuPrA2vpqb"
base_url = "https://panel293051.testpanel.net/privateApi"

@app.route('/get_orders', methods=['GET'])
def get_orders():
    status = request.args.get('status', 'active')
    limit = request.args.get('limit', 5)
    url = f"{base_url}/getOrders"
    params = {
        "status": status,
        "limit": limit,
        "token": token
    }
    
    response = requests.get(url, params=params)
    
    if response.status_code == 200:
        return jsonify(response.json())  # Return JSON response
    else:
        return jsonify({"error": "Hitilafu ya kuwasiliana na API"}), 500

if __name__ == '__main__':
    app.run(debug=True)
