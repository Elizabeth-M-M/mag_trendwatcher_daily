User.destroy_all
Article.destroy_all
Review.destroy_all
Editor.destroy_all
puts "Start seeding..."
SOME_CONTENT="I’d never join a book club. I’d be kicked out. The leader of the book cult would say, sarcastically, like a villain in a dark story where characters carry shovels into the woods at night, “Biko, maybe this isn’t for you, which is a great irony because you are a writer.” I’d agree. In fact, I’d beg to leave before I’m humiliated over a vote. This is because I’m a slow reader. A very slow reader. I read only two books a month. I’m slow because when I read a good paragraph or chapter, I will pause and close my eyes and tilt my head back so that all those beautiful words I have seen with my eyes can slide down to my heart where I can trap them. I’m slow because when I’m out of the house, driving or pinching avocados in a market alley, I will think of nothing but the book waiting for me back at home. It’s like being on your honeymoon in Zanzibar and you are out exploring the local village while your new spouse opted to remain at the resort because you married someone who likes to lounge by the pool all day and cover their eyes with a book. Or round slices of cucumber. So you are out there exploring but not even having that much fun because you are thinking of your spouse and you can’t wait to go back and eat that cucumber. That’s how I am with a great book I’m reading. I think of it when I’m not reading it. I want to devour its words, I want all the beautiful sentences to transport me to a place with no language, just emotions. And when I go back to the house, I will go back and re-read parts that I enjoyed. That slows me the hell down. 

I’m also slow because when I’m reading a great book I never want to finish it. I want to stay with the book forever.  Finishing a good book is an unimaginable loss, it’s endless grief, a corridor of darkness. It’s a brutal breakup. So I take my time with great books. I want to constantly see it on my bed stand when I wake up. I want to carry it into planes and cafes. I carry it to every room in the house. I spill things on it. I dog-ear it. You will find scraps of paper in it. Plane tickets. Receipts. A feather. A flattened grain of rice. I highlight the hell out of lines and paragraphs. I draw smiley faces on pages. Because a book is a relationship and you have to leave yourself in a relationship, to allow it to take from you as much as you give it. 

I turn my nose at those sanctimonious people who treat their books like an only child. Babying their books. How they get seizures when they see pages folded. Or God-forbid, should they see you writing notes on a book. Why on earth would you want to finish reading a book and leave it looking as good as new? Nobody is carrying a book to heaven, I can tell you that. Or hell, for that matter. My books look read. They look like someone – a human, not an OCD robot – actually handled the book. They tell their own story of the relationship with the owner. If you picked a book I’ve read you will know, first that it was read and second, that the person who read it loved chapos. Also I don’t lend out my books. It’s like lending out your socks. I can buy someone the same book but I won’t lend them mine. People should own books, not borrow books. Books are not loans. "
10.times do
  user = User.create!(
    username:Faker::Internet.username,
    email:Faker::Internet.email,
    password:"12345y7",
    password_confirmation:"12345y7"
  )
end

10.times do
  article= Article.create!(
    title: "I'm Technology",
    content:SOME_CONTENT,
    category:"Technology",
    image:"https://images.pexels.com/photos/15201214/pexels-photo-15201214.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
  )
end
7.times do
  article= Article.create!(
    title: "I'm Science",
    content:SOME_CONTENT,
    category:"Science",
    image:"https://images.pexels.com/photos/15201214/pexels-photo-15201214.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
  )
end
2.times do
  article= Article.create!(
    title: "I'm Lifestyle",
    content:SOME_CONTENT,
    category:"Lifestyle",
    image:"https://images.pexels.com/photos/15201214/pexels-photo-15201214.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
  )
end
7.times do
  article= Article.create!(
    title: "I'm Travel",
    content:SOME_CONTENT,
    category:"Travel",
    image:"https://images.pexels.com/photos/15201214/pexels-photo-15201214.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
  )
end
8.times do
  article= Article.create!(
    title: "I'm Sport",
    content:SOME_CONTENT,
    category:"Sport",
    image:"https://images.pexels.com/photos/15201214/pexels-photo-15201214.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
  )
end
4.times do
  article= Article.create!(
    title: "I'm Gaming",
    content:SOME_CONTENT,
    category:"Gaming",
    image:"https://images.pexels.com/photos/15201214/pexels-photo-15201214.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
  )
end
5.times do
  article= Article.create!(
    title: "I'm Food",
    content:SOME_CONTENT,
    category:"Food",
    image:"https://images.pexels.com/photos/15201214/pexels-photo-15201214.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
  )
end
5.times do
  article= Article.create!(
    title: "I'm Business",
    content:SOME_CONTENT,
    category:"Business",
    image:"https://images.pexels.com/photos/15201214/pexels-photo-15201214.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
  )
end
# 50.times do
#   review= Review.create!(
#     user_id:rand(1..10),
#     article_id:rand(1..40),
#     comment:Faker::Lorem.paragraph(sentence_count: 2)
#   )
# end
editor=Editor.create!(
  username:"editor",
  password:98765
)

puts "done"
