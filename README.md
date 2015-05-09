行政区域 GeoJSON
===

国土地理院からダウンドロードできる行政区域を geojson 形式に変換したものを置いています。
行政区域は国土地理院の[数値情報 ダウンロードサービス](http://nlftp.mlit.go.jp/ksj/index.html)の「行政区域」からダウンロードできます。

## 公開データ

本リポジトリでは次のデータを提供しています。

* 平成26年度（作成時点：平成26年4月1日）の行政区域の geojson。
* [geojsons](https://github.com/sunny4381/administrative-divisions/tree/master/geojsons) ディレクトリには、国土地理院からダウンロードした shapefile を [shp2json](https://github.com/substack/shp2json) で変換したものを収録。
* [multipolygons](https://github.com/sunny4381/administrative-divisions/tree/master/multipolygons) ディレクトリには、geojsons のファイルを市町村で名寄せしたものを収録。

## データの作成方法

ご自身で geojson を作成するには、本リポジトリを clone し、必要なモジュールをインストールします。

    $ git clone https://github.com/sunny4381/administrative-divisions.git
    $ cd administrative-divisions
    $ npm install

次に、国土地理院から行政区域をダウンドロードし、downloads ディレクトリに置きます。
そして　`convert.sh` コマンドを実行すると、geojsons ディレクトリと multipolygons ディレクトリに geojson ファイルができます。

## ライセンスおよび著作権

* geojson ファイルは、国土地理院のライセンスに従います。
* js ファイルおよび sh ファイルは MIT ライセンスです。
