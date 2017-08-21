var path = require("path");

var express = require("express");
var app = express();

var port = 3001;  //监听的端口



app.set("views",path.join(__dirname,"./views/pages"));
app.set("view engine","jade");
app.use(express.static(path.join(__dirname,"./public")));

app.get("/",function(req,res){
	res.render("index",{
		title : "爱电影 首页",
		movies : [
			{
				_id : "1",
				title : "魔兽世界",
				poster : "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503329652877&di=463aa6cf7b748a2204d4ed157e745004&imgtype=0&src=http%3A%2F%2Fimage.tianjimedia.com%2FuploadImages%2F2015%2F163%2F39%2F7O788ZRU88Y0.jpg"
			},
			{
				_id : "2",
				title : "魔兽世界",
				poster : "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503329652877&di=463aa6cf7b748a2204d4ed157e745004&imgtype=0&src=http%3A%2F%2Fimage.tianjimedia.com%2FuploadImages%2F2015%2F163%2F39%2F7O788ZRU88Y0.jpg"
			},
			{
				_id : "3",
				title : "魔兽世界",
				poster : "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503329652877&di=463aa6cf7b748a2204d4ed157e745004&imgtype=0&src=http%3A%2F%2Fimage.tianjimedia.com%2FuploadImages%2F2015%2F163%2F39%2F7O788ZRU88Y0.jpg"
			},
			{
				_id : "4",
				title : "魔兽世界",
				poster : "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503329652877&di=463aa6cf7b748a2204d4ed157e745004&imgtype=0&src=http%3A%2F%2Fimage.tianjimedia.com%2FuploadImages%2F2015%2F163%2F39%2F7O788ZRU88Y0.jpg"
			},
			{
				_id : "5",
				title : "魔兽世界",
				poster : "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503329652877&di=463aa6cf7b748a2204d4ed157e745004&imgtype=0&src=http%3A%2F%2Fimage.tianjimedia.com%2FuploadImages%2F2015%2F163%2F39%2F7O788ZRU88Y0.jpg"
			}
		]
	})
});

// detail page
app.get('/movie/:id', function(req, res) {
    var id = req.params.id

    res.render('detail', {
        title: '爱电影 ',
        movie:  {
			_id : 4,
			title : "魔兽世界",
			doctor : "谭先生",
			country : "中国",
			language : "汉语",
			poster : "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503329652877&di=463aa6cf7b748a2204d4ed157e745004&imgtype=0&src=http%3A%2F%2Fimage.tianjimedia.com%2FuploadImages%2F2015%2F163%2F39%2F7O788ZRU88Y0.jpg",
			flash : "http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf",
			year : "1992",
			summary : "简介"        		
        }
    })
});

// admin update movie
app.get('/admin/update/:id', function(req, res) {
    var id = req.params.id

    res.render('admin', {
        title: '爱电影 后台更新页',
        movie: {
        	_id : 1,
        	title : "魔兽世界",
        	doctor : "谭先生",
        	country : "中国",
        	language : "汉语",
        	poster : "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503329652877&di=463aa6cf7b748a2204d4ed157e745004&imgtype=0&src=http%3A%2F%2Fimage.tianjimedia.com%2FuploadImages%2F2015%2F163%2F39%2F7O788ZRU88Y0.jpg",
        	flash : "",
        	year : "1992",
        	summary : "简介"
        }
    })
});

//admin movie
app.get('/admin/movie', function(req, res) {
    res.render('admin', {
        title:'后台录入页面',
        movie: {
            title: '',
            doctor: '',
            country: '',
            year: '',
            poster: '',
            summary: '',
            flash: '',
            language: ''
        }
    })
});

// list page
app.get('/admin/list', function(req, res) {
    res.render('list', {
        title: '爱电影 列表页',
        movies: [
        	{
				_id : 1,
				title : "魔兽世界",
				doctor : "谭先生",
				country : "中国",
				language : "汉语",
				poster : "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503329652877&di=463aa6cf7b748a2204d4ed157e745004&imgtype=0&src=http%3A%2F%2Fimage.tianjimedia.com%2FuploadImages%2F2015%2F163%2F39%2F7O788ZRU88Y0.jpg",
				flash : "",
				year : "1992",
				summary : "简介"        		
        	},
        	{
				_id : 2,
				title : "魔兽世界",
				doctor : "谭先生",
				country : "中国",
				language : "汉语",
				poster : "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503329652877&di=463aa6cf7b748a2204d4ed157e745004&imgtype=0&src=http%3A%2F%2Fimage.tianjimedia.com%2FuploadImages%2F2015%2F163%2F39%2F7O788ZRU88Y0.jpg",
				flash : "",
				year : "1992",
				summary : "简介"        		
        	},
        	{
				_id : 3,
				title : "魔兽世界",
				doctor : "谭先生",
				country : "中国",
				language : "汉语",
				poster : "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503329652877&di=463aa6cf7b748a2204d4ed157e745004&imgtype=0&src=http%3A%2F%2Fimage.tianjimedia.com%2FuploadImages%2F2015%2F163%2F39%2F7O788ZRU88Y0.jpg",
				flash : "",
				year : "1992",
				summary : "简介"        		
        	},
        	{
				_id : 4,
				title : "魔兽世界",
				doctor : "谭先生",
				country : "中国",
				language : "汉语",
				poster : "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503329652877&di=463aa6cf7b748a2204d4ed157e745004&imgtype=0&src=http%3A%2F%2Fimage.tianjimedia.com%2FuploadImages%2F2015%2F163%2F39%2F7O788ZRU88Y0.jpg",
				flash : "",
				year : "1992",
				summary : "简介"        		
        	}
        ]
    })
});

app.post('/admin/movie/new',function(req,res){
    var id = req.body.movie._id;
    var movieObj = req.body.movie;
    var _movie;
});

//list delete movie
app.delete('/admin/list', function(req, res) {
    var id = req.query.id

	res.json({success: 1});
});

app.listen(8222);