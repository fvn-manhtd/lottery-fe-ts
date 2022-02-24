
INDEX_FILE = ../../../public/mall_theme_basic/index.html
SPA_FILE = ../resources/views/user/spa.twig
SPA_FOLDER = ../resources/views/user/

# convert theme
mall-theme-build:
	yarn newbuild
	rm -f ${SPA_FILE}
	mv -f ${INDEX_FILE} $(SPA_FILE)
