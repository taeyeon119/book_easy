import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Star, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Books = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { value: "all", label: "전체" },
    { value: "programming", label: "프로그래밍" },
    { value: "design", label: "디자인" },
    { value: "business", label: "비즈니스" },
    { value: "science", label: "과학" },
    { value: "literature", label: "문학" },
  ];

  const books = [
    {
      id: 1,
      title: "모던 자바스크립트 Deep Dive",
      author: "이웅모",
      category: "programming",
      rating: 4.8,
      reviews: 124,
      publishYear: 2020,
      available: true,
      image: "📚",
      description: "자바스크립트의 기본 개념과 동작 원리를 상세히 설명한 완벽 가이드"
    },
    {
      id: 2,
      title: "클린 코드",
      author: "로버트 C. 마틴",
      category: "programming",
      rating: 4.9,
      reviews: 289,
      publishYear: 2008,
      available: true,
      image: "🔧",
      description: "좋은 코드를 작성하는 방법과 나쁜 코드를 좋은 코드로 바꾸는 방법"
    },
    {
      id: 3,
      title: "디자인 패턴",
      author: "GoF",
      category: "programming",
      rating: 4.7,
      reviews: 156,
      publishYear: 1994,
      available: false,
      image: "🎨",
      description: "재사용 가능한 객체지향 소프트웨어 요소들"
    },
    {
      id: 4,
      title: "스타트업 바이블",
      author: "김창욱",
      category: "business",
      rating: 4.5,
      reviews: 89,
      publishYear: 2021,
      available: true,
      image: "🚀",
      description: "성공하는 스타트업을 위한 실무 가이드"
    },
    {
      id: 5,
      title: "UX 디자인 입문",
      author: "박디자인",
      category: "design",
      rating: 4.6,
      reviews: 67,
      publishYear: 2022,
      available: true,
      image: "🎭",
      description: "사용자 경험 디자인의 기본부터 실무까지"
    },
    {
      id: 6,
      title: "코스모스",
      author: "칼 세이건",
      category: "science",
      rating: 4.9,
      reviews: 234,
      publishYear: 1980,
      available: true,
      image: "🌌",
      description: "우주와 인간에 대한 경이로운 이야기"
    },
  ];

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">도서 목록</h1>
          <p className="text-muted-foreground">원하는 도서를 검색하고 대출해보세요</p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="도서명, 저자명으로 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="카테고리" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            총 {filteredBooks.length}권의 도서를 찾았습니다
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <Card key={book.id} className="hover:shadow-book transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-3">
                  <div className="text-4xl">{book.image}</div>
                  <Badge variant={book.available ? "default" : "secondary"}>
                    {book.available ? "대출가능" : "대출중"}
                  </Badge>
                </div>
                <CardTitle className="text-lg line-clamp-2 leading-tight">{book.title}</CardTitle>
                <CardDescription className="flex items-center space-x-1">
                  <User className="h-3 w-3" />
                  <span>{book.author}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {book.description}
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-secondary fill-current mr-1" />
                      <span>{book.rating}</span>
                      <span className="text-muted-foreground ml-1">({book.reviews})</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{book.publishYear}</span>
                    </div>
                  </div>
                  
                  <Link to={`/book/${book.id}`} className="block">
                    <Button 
                      className="w-full" 
                      variant={book.available ? "default" : "outline"}
                      disabled={!book.available}
                    >
                      {book.available ? "상세보기" : "대출중"}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredBooks.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              검색 결과가 없습니다
            </h3>
            <p className="text-muted-foreground mb-4">
              다른 키워드로 검색해보세요
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
            >
              전체 도서 보기
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Books;