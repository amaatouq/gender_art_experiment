import json

json_string = open("./toy_artexperiment041919.json").read()
json_data = json.loads(json_string)

for i in range(len(json_data)):
    json_data[i] = json_data[i][0]

new_json_string = json.dumps(json_data)
open("./toy_artexperiment041919_new.json", "w").write(new_json_string)
