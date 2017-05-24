const products = [
  {'id': 1, 'name': 'Interdum LLC', 'price': '791.34', 'desc': 'gravida molestie arcu. Sed eu nibh vulputate mauris sagittis placerat. Cras dictum', 'category': 2},
  {'id': 2, 'name': 'Sed PC', 'price': '671.27', 'desc': 'metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas', 'category': 1},
  {'id': 3, 'name': 'Mauris Elit Dictum Incorporated', 'price': '508.13', 'desc': 'dolor vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor diam', 'category': 2},
  {'id': 4, 'name': 'Vehicula Aliquet Industries', 'price': '570.39', 'desc': 'massa. Integer vitae nibh. Donec est mauris, rhoncus id, mollis nec,', 'category': 3},
  {'id': 5, 'name': 'Neque Company', 'price': '926.68', 'desc': 'augue. Sed molestie. Sed id risus quis diam luctus lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.', 'category': 1},
  {'id': 6, 'name': 'Nulla Magna Malesuada Limited', 'price': '686.03', 'desc': 'arcu iaculis enim, sit amet ornare lectus justo eu arcu. Morbi', 'category': 1},
  {'id': 7, 'name': 'Imperdiet Dictum Incorporated', 'price': '670.66', 'desc': 'diam dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris, rhoncus id, mollis nec, cursus a,', 'category': 2},
  {'id': 8, 'name': 'Dui Nec Tempus Inc.', 'price': '659.76', 'desc': 'Nulla eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas a, scelerisque sed, sapien.', 'category': 1},
  {'id': 9, 'name': 'Blandit LLC', 'price': '926.95', 'desc': 'Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante.', 'category': 1},
  {'id': 10, 'name': 'Nunc Laoreet LLP', 'price': '914.86', 'desc': 'tristique neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci', 'category': 3},
  {'id': 11, 'name': 'Phasellus Corporation', 'price': '770.69', 'desc': 'aliquam iaculis, lacus pede sagittis augue, eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla', 'category': 3},
  {'id': 12, 'name': 'Suspendisse Inc.', 'price': '522.98', 'desc': 'porta elit, a feugiat tellus lorem eu metus. In lorem. Donec elementum,', 'category': 3},
  {'id': 13, 'name': 'Risus Duis Associates', 'price': '286.67', 'desc': 'fringilla mi lacinia mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit', 'category': 2},
  {'id': 14, 'name': 'Nunc Inc.', 'price': '759.68', 'desc': 'malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper cursus. Integer mollis.', 'category': 1},
  {'id': 15, 'name': 'Felis Incorporated', 'price': '368.22', 'desc': 'odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus.', 'category': 1},
  {'id': 16, 'name': 'Nunc Company', 'price': '431.49', 'desc': 'purus gravida sagittis. Duis gravida. Praesent eu nulla at sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus', 'category': 2},
  {'id': 17, 'name': 'Nullam Enim Associates', 'price': '561.44', 'desc': 'odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum enim non nisi. Aenean eget metus. In nec orci. Donec nibh. Quisque nonummy ipsum', 'category': 2},
  {'id': 18, 'name': 'Praesent Institute', 'price': '71.38', 'desc': 'erat vitae risus. Duis a mi fringilla mi lacinia mattis. Integer eu lacus. Quisque imperdiet, erat nonummy', 'category': 2},
  {'id': 19, 'name': 'Condimentum Foundation', 'price': '405.21', 'desc': 'convallis erat, eget tincidunt dui augue eu tellus. Phasellus elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec', 'category': 3},
  {'id': 20, 'name': 'Quisque Nonummy Ipsum Incorporated', 'price': '628.85', 'desc': 'nec tempus scelerisque, lorem ipsum sodales purus, in molestie tortor nibh sit amet orci. Ut', 'category': 3},
  {'id': 21, 'name': 'Montes Industries', 'price': '447.45', 'desc': 'auctor, nunc nulla vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper tellus id', 'category': 1},
  {'id': 22, 'name': 'Risus A Ultricies Corp.', 'price': '631.73', 'desc': 'feugiat tellus lorem eu metus. In lorem. Donec elementum, lorem ut aliquam iaculis, lacus pede sagittis augue, eu tempor erat neque', 'category': 2},
  {'id': 23, 'name': 'Massa Company', 'price': '570.54', 'desc': 'justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis', 'category': 3},
  {'id': 24, 'name': 'Duis At Inc.', 'price': '110.53', 'desc': 'non dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus', 'category': 2},
  {'id': 25, 'name': 'Ut Foundation', 'price': '104.37', 'desc': 'a neque. Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam', 'category': 3},
  {'id': 26, 'name': 'Nunc Quis Institute', 'price': '314.03', 'desc': 'amet diam eu dolor egestas rhoncus. Proin nisl sem, consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem, luctus ut, pellentesque', 'category': 2},
  {'id': 27, 'name': 'Eu Accumsan Sed Institute', 'price': '196.38', 'desc': 'sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis', 'category': 1},
  {'id': 28, 'name': 'Laoreet Ipsum Curabitur Institute', 'price': '594.94', 'desc': 'sem, vitae aliquam eros turpis non enim. Mauris quis turpis vitae purus', 'category': 3},
  {'id': 29, 'name': 'Odio LLP', 'price': '78.60', 'desc': 'egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum enim non', 'category': 3},
  {'id': 30, 'name': 'Gravida Industries', 'price': '536.44', 'desc': 'semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam a felis ullamcorper viverra.', 'category': 1},
  {'id': 31, 'name': 'Non Lacinia Industries', 'price': '887.65', 'desc': 'magna. Cras convallis convallis dolor. Quisque tincidunt pede ac urna. Ut tincidunt vehicula risus. Nulla', 'category': 3},
  {'id': 32, 'name': 'Eleifend Nec Malesuada Corporation', 'price': '639.74', 'desc': 'Quisque ornare tortor at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc', 'category': 3},
  {'id': 33, 'name': 'Magna Ltd', 'price': '574.56', 'desc': 'vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac arcu. Nunc mauris.', 'category': 3},
  {'id': 34, 'name': 'Massa Integer Vitae Institute', 'price': '629.28', 'desc': 'Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut mi. Duis risus odio, auctor vitae,', 'category': 2},
  {'id': 35, 'name': 'Adipiscing Associates', 'price': '850.16', 'desc': 'Aliquam erat volutpat. Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat placerat velit. Quisque varius. Nam porttitor scelerisque neque. Nullam nisl.', 'category': 3},
  {'id': 36, 'name': 'Sem Limited', 'price': '80.85', 'desc': 'mus. Aenean eget magna. Suspendisse tristique neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec', 'category': 2},
  {'id': 37, 'name': 'Cras Vehicula Aliquet LLP', 'price': '864.16', 'desc': 'enim, sit amet ornare lectus justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor non,', 'category': 2},
  {'id': 38, 'name': 'Proin Vel Nisl Ltd', 'price': '776.95', 'desc': 'sed dui. Fusce aliquam, enim nec tempus scelerisque, lorem ipsum sodales purus, in molestie', 'category': 3},
  {'id': 39, 'name': 'Dolor Sit Amet Ltd', 'price': '383.72', 'desc': 'molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio.', 'category': 1},
  {'id': 40, 'name': 'Quis Lectus Nullam Inc.', 'price': '89.80', 'desc': 'Suspendisse tristique neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem,', 'category': 1},
  {'id': 41, 'name': 'Penatibus Et Limited', 'price': '867.98', 'desc': 'eu arcu. Morbi sit amet massa. Quisque porttitor eros nec', 'category': 1},
  {'id': 42, 'name': 'Enim Etiam LLC', 'price': '931.23', 'desc': 'egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat', 'category': 2},
  {'id': 43, 'name': 'Magna Ut Company', 'price': '511.61', 'desc': 'ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus ornare. Fusce mollis. Duis sit amet diam eu dolor egestas rhoncus. Proin', 'category': 2},
  {'id': 44, 'name': 'Non Incorporated', 'price': '678.87', 'desc': 'pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien,', 'category': 3},
  {'id': 45, 'name': 'Laoreet Posuere Ltd', 'price': '547.75', 'desc': 'Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec', 'category': 3},
  {'id': 46, 'name': 'Et Consulting', 'price': '406.12', 'desc': 'mi eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum', 'category': 1},
  {'id': 47, 'name': 'Adipiscing Mauris Molestie Consulting', 'price': '854.94', 'desc': 'rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida sit', 'category': 2},
  {'id': 48, 'name': 'Pellentesque A Facilisis Ltd', 'price': '427.38', 'desc': 'ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut', 'category': 3},
  {'id': 49, 'name': 'Congue In Scelerisque Company', 'price': '38.69', 'desc': 'enim. Etiam imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit, est ac facilisis facilisis, magna tellus faucibus', 'category': 2},
  {'id': 50, 'name': 'Magna Duis Dignissim Inc.', 'price': '390.60', 'desc': 'vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur', 'category': 1},
  {'id': 51, 'name': 'Egestas Urna Justo Inc.', 'price': '593.36', 'desc': 'vehicula aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis', 'category': 3},
  {'id': 52, 'name': 'Viverra Industries', 'price': '504.52', 'desc': 'cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer', 'category': 1},
  {'id': 53, 'name': 'Libero Proin Sed PC', 'price': '542.39', 'desc': 'ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula.', 'category': 2},
  {'id': 54, 'name': 'Nec Ante Blandit Foundation', 'price': '24.54', 'desc': 'at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras convallis convallis dolor.', 'category': 3},
  {'id': 55, 'name': 'Ut Nec Urna Incorporated', 'price': '56.11', 'desc': 'Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum', 'category': 2},
  {'id': 56, 'name': 'Adipiscing Enim Mi Inc.', 'price': '148.65', 'desc': 'quam, elementum at, egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue scelerisque mollis.', 'category': 3},
  {'id': 57, 'name': 'Etiam Industries', 'price': '860.38', 'desc': 'in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu.', 'category': 1},
  {'id': 58, 'name': 'Leo In Lobortis Limited', 'price': '339.00', 'desc': 'mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam ornare, libero at auctor ullamcorper, nisl', 'category': 2},
  {'id': 59, 'name': 'Pede Cras Corporation', 'price': '526.19', 'desc': 'Nullam enim. Sed nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc sed libero. Proin sed turpis nec mauris blandit mattis. Cras eget nisi', 'category': 1},
  {'id': 60, 'name': 'Cras Dictum Corporation', 'price': '993.89', 'desc': 'mattis. Cras eget nisi dictum augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo hendrerit.', 'category': 3},
  {'id': 61, 'name': 'Litora Torquent Per Company', 'price': '451.28', 'desc': 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel nisl. Quisque fringilla euismod enim. Etiam gravida molestie arcu. Sed eu nibh vulputate mauris sagittis placerat.', 'category': 3},
  {'id': 62, 'name': 'Rutrum Ltd', 'price': '445.56', 'desc': 'ligula eu enim. Etiam imperdiet dictum magna. Ut tincidunt orci quis lectus.', 'category': 2},
  {'id': 63, 'name': 'Est Ac Mattis Company', 'price': '781.96', 'desc': 'auctor odio a purus. Duis elementum, dui quis accumsan convallis, ante lectus convallis est, vitae sodales nisi magna sed dui.', 'category': 1},
  {'id': 64, 'name': 'Pharetra Nibh Corp.', 'price': '153.48', 'desc': 'quis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper cursus. Integer mollis.', 'category': 3},
  {'id': 65, 'name': 'Imperdiet Ornare Limited', 'price': '810.13', 'desc': 'ligula tortor, dictum eu, placerat eget, venenatis a, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet,', 'category': 1},
  {'id': 66, 'name': 'Venenatis Limited', 'price': '474.02', 'desc': 'Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam ornare, libero at auctor ullamcorper, nisl arcu iaculis enim, sit amet', 'category': 3},
  {'id': 67, 'name': 'Iaculis Aliquet Diam Company', 'price': '279.84', 'desc': 'Quisque varius. Nam porttitor scelerisque neque. Nullam nisl. Maecenas malesuada fringilla est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada augue ut lacus. Nulla tincidunt, neque vitae semper', 'category': 1},
  {'id': 68, 'name': 'In Incorporated', 'price': '26.37', 'desc': 'Proin velit. Sed malesuada augue ut lacus. Nulla tincidunt, neque vitae semper egestas, urna justo', 'category': 3},
  {'id': 69, 'name': 'Vulputate Risus A Institute', 'price': '487.56', 'desc': 'adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin', 'category': 2},
  {'id': 70, 'name': 'Eleifend Institute', 'price': '173.27', 'desc': 'nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna nec', 'category': 3},
  {'id': 71, 'name': 'Iaculis Quis Corporation', 'price': '893.43', 'desc': 'commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem', 'category': 3},
  {'id': 72, 'name': 'Turpis In Condimentum Limited', 'price': '441.96', 'desc': 'volutpat. Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat placerat velit. Quisque varius. Nam porttitor scelerisque neque. Nullam nisl. Maecenas malesuada fringilla est. Mauris eu turpis. Nulla', 'category': 2},
  {'id': 73, 'name': 'Eu Inc.', 'price': '838.88', 'desc': 'litora torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In', 'category': 3},
  {'id': 74, 'name': 'Vel Incorporated', 'price': '859.01', 'desc': 'lectus justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor non, feugiat nec, diam. Duis mi', 'category': 1},
  {'id': 75, 'name': 'Convallis Foundation', 'price': '797.42', 'desc': 'Aenean gravida nunc sed pede. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin', 'category': 3},
  {'id': 76, 'name': 'Integer Sem Institute', 'price': '507.00', 'desc': 'sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo', 'category': 1},
  {'id': 77, 'name': 'Dui Industries', 'price': '618.75', 'desc': 'eget lacus. Mauris non dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;', 'category': 2},
  {'id': 78, 'name': 'Phasellus At Augue LLC', 'price': '838.06', 'desc': 'sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam', 'category': 2},
  {'id': 79, 'name': 'Ac Mattis Inc.', 'price': '87.06', 'desc': 'scelerisque neque sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis in, cursus et, eros.', 'category': 1},
  {'id': 80, 'name': 'Fermentum Arcu Vestibulum Corp.', 'price': '609.93', 'desc': 'Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem', 'category': 1},
  {'id': 81, 'name': 'Adipiscing Enim Mi Inc.', 'price': '960.54', 'desc': 'rutrum lorem ac risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam a felis ullamcorper viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor quis, tristique ac, eleifend vitae,', 'category': 2},
  {'id': 82, 'name': 'Amet Consulting', 'price': '912.20', 'desc': 'lectus pede, ultrices a, auctor non, feugiat nec, diam. Duis mi enim, condimentum eget, volutpat ornare,', 'category': 2},
  {'id': 83, 'name': 'Tellus PC', 'price': '972.37', 'desc': 'Nulla aliquet. Proin velit. Sed malesuada augue ut lacus. Nulla tincidunt, neque vitae semper egestas, urna justo', 'category': 3},
  {'id': 84, 'name': 'Ligula Aenean Gravida Company', 'price': '853.21', 'desc': 'at pretium aliquet, metus urna convallis erat, eget tincidunt dui', 'category': 2},
  {'id': 85, 'name': 'Justo Praesent Institute', 'price': '774.20', 'desc': 'vulputate mauris sagittis placerat. Cras dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus.', 'category': 1},
  {'id': 86, 'name': 'Elit Nulla Facilisi Associates', 'price': '434.45', 'desc': 'porttitor tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus in, hendrerit', 'category': 2},
  {'id': 87, 'name': 'Elit Consulting', 'price': '18.83', 'desc': 'Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris,', 'category': 1},
  {'id': 88, 'name': 'Nec Leo Foundation', 'price': '46.94', 'desc': 'sit amet, consectetuer adipiscing elit. Aliquam auctor, velit eget laoreet posuere, enim nisl elementum purus, accumsan', 'category': 2},
  {'id': 89, 'name': 'Venenatis A Ltd', 'price': '219.23', 'desc': 'vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae', 'category': 2},
  {'id': 90, 'name': 'Faucibus Inc.', 'price': '13.46', 'desc': 'nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna suscipit nonummy.', 'category': 3},
  {'id': 91, 'name': 'Erat Corp.', 'price': '113.73', 'desc': 'vehicula aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet', 'category': 2},
  {'id': 92, 'name': 'Vitae Corp.', 'price': '216.15', 'desc': 'leo. Morbi neque tellus, imperdiet non, vestibulum nec, euismod in, dolor. Fusce feugiat. Lorem ipsum dolor', 'category': 3},
  {'id': 93, 'name': 'Sagittis Incorporated', 'price': '363.45', 'desc': 'sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate,', 'category': 1},
  {'id': 94, 'name': 'Suspendisse Commodo Tincidunt Associates', 'price': '632.92', 'desc': 'id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae', 'category': 3},
  {'id': 95, 'name': 'Dis Limited', 'price': '671.12', 'desc': 'diam. Duis mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed', 'category': 2},
  {'id': 96, 'name': 'Cras PC', 'price': '788.73', 'desc': 'vitae mauris sit amet lorem semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus. In mi pede,', 'category': 3},
  {'id': 97, 'name': 'Nec Tempus Consulting', 'price': '960.10', 'desc': 'tellus sem mollis dui, in sodales elit erat vitae risus. Duis a mi fringilla mi lacinia mattis. Integer eu', 'category': 3},
  {'id': 98, 'name': 'Maecenas Libero Corporation', 'price': '265.86', 'desc': 'nec metus facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis a, magna. Lorem ipsum dolor sit amet, consectetuer', 'category': 2},
  {'id': 99, 'name': 'Non Leo Vivamus Institute', 'price': '422.06', 'desc': 'ac urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat semper', 'category': 2},
  {'id': 100, 'name': 'Molestie Pharetra Nibh Associates', 'price': '14.65', 'desc': 'pede ac urna. Ut tincidunt vehicula risus. Nulla eget metus eu', 'category': 3}
]

export default products