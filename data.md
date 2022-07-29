# API POINTS


## ARTICLE

### Menampilkan seluruh article

```
GET: /show

response:
[
  {
    "id"        : "",
    "article"     : "",
    "author"    : "",
    "content"   : "",
    "markdown"  : ""
  },
  {
    ...
  }
]
```

### Menampilkan article berdasarkan ```id```

```
GET: /article/[id]

response:
{
  "id"        : "",
  "artticle"  : "",
  "author"    : "",
  "content"   : "",
  "markdown"  : ""
}
```

### Menambahkan article

```
POST: /article

data:
{
  "artticle"  : "",
  "author"    : "",
  "content"   : "",
  "markdown"  : ""
}

response:
true    //if true
false   //if false
```

### Mengubah article

```
PUT: /article

data:
{
  "artticle"  : "",
  "author"    : "",
  "content"   : "",
  "markdown"  : ""
}

response:
true    //if true
false   //if false
```

### Menghapus article

```
DELETE: /article

response:
true    //if true
false   //if false
```

## PORTFOLIO

### Menampilkan seluruh data portfolio

```
GET: /read

response:
[
  array(1) {
  [0]=>
  array(8) {
    ["id"]=>
    string(...) ""
    ["avatar"]=>
    string(...4) ""
    ["nama"]=>
    string(...) ""
    ["desc"]=>
    string(...) ""
    ["ig"]=>
    string(...) ""
    ["yt"]=>
    string(...) ""
    ["wa"]=>
    string(...) ""
    ["gh"]=>
    string(...) ""
  }
]
```

### Menampilkan data portfolio berdasarkan ```id```

```
GET: /portfolio/[id]

response:
array(1) {
  [0]=>
  array(8) {
    ["id"]=>
    string(...) ""
    ["avatar"]=>
    string(...4) ""
    ["nama"]=>
    string(...) ""
    ["desc"]=>
    string(...) ""
    ["ig"]=>
    string(...) ""
    ["yt"]=>
    string(...) ""
    ["wa"]=>
    string(...) ""
    ["gh"]=>
    string(...) ""
  }
```

### Menambahkan data porfolio

```
POST: /portfolio

data:
array(1) {
  [0]=>
  array(8) {
    ["id"]=>
    string(...) ""
    ["avatar"]=>
    string(...4) ""
    ["nama"]=>
    string(...) ""
    ["desc"]=>
    string(...) ""
    ["ig"]=>
    string(...) ""
    ["yt"]=>
    string(...) ""
    ["wa"]=>
    string(...) ""
    ["gh"]=>
    string(...) ""
  }

response:
true    //if true
false   //if false
```

### Mengubah data porfolio

```
PUT: /portfolio

data:
array(1) {
  [0]=>
  array(8) {
    ["id"]=>
    string(...) ""
    ["avatar"]=>
    string(...4) ""
    ["nama"]=>
    string(...) ""
    ["desc"]=>
    string(...) ""
    ["ig"]=>
    string(...) ""
    ["yt"]=>
    string(...) ""
    ["wa"]=>
    string(...) ""
    ["gh"]=>
    string(...) ""
  }
response:
true    //if true
false   //if false
```

### Menghapus data portfolio

```
DELETE: /hapusbio/[id]

response:
true    //if true
false   //if false
```

Output diatas adalah  array karena saya menggunakan syntax var_dump unmtuk menampilkan data.
Karena saya tidak menggunakan JS pada Bio maka saya menggantinya dengan menampilkan outputnya kedalam view/index secara langsung.
dengan menggunakan:

```
    echo view('index', compact('data'))
```


# DATABASE DESIGN

![Design Database](https://raw.githubusercontent.com/Shznnn/tekweb2022/main/assets/p1.png)
