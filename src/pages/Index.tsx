import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { BookOpen, Search, Star, TrendingUp, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredBooks = [
    { id: 1, title: "모던 자바스크립트", author: "김개발", rating: 4.8, image: "📚", category: "프로그래밍" },
    { id: 2, title: "클린 코드", author: "로버트 마틴", rating: 4.9, image: "🔧", category: "개발방법론" },
    { id: 3, title: "디자인 패턴", author: "GoF", rating: 4.7, image: "🎨", category: "소프트웨어 설계" },
    { id: 4, title: "알고리즘 문제해결", author: "박알고", rating: 4.6, image: "🧮", category: "알고리즘" },
  ];

  const stats = [
    { icon: BookOpen, label: "총 도서", value: "12,000+" },
    { icon: Users, label: "이용자", value: "5,200+" },
    { icon: TrendingUp, label: "대출량", value: "월 850+" },
    { icon: Clock, label: "운영시간", value: "24/7" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-float">
            <BookOpen className="h-20 w-20 text-primary mx-auto mb-8" />
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-6">
            지식의 세계로 떠나는 여행
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            수천 권의 도서를 간편하게 대출하고, 언제 어디서나 학습할 수 있는 온라인 도서관입니다.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="찾고 싶은 도서를 검색하세요..." 
                className="pl-10 h-12 text-base shadow-book"
              />
              <Button className="absolute right-2 top-2 h-8" size="sm">
                검색
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/books">
              <Button variant="hero" size="lg" className="text-lg px-8">
                도서 둘러보기
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="book" size="lg" className="text-lg px-8">
                회원가입하기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">인기 도서</h2>
            <p className="text-muted-foreground">가장 많이 대출되는 도서들을 만나보세요</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBooks.map((book) => (
              <Card key={book.id} className="hover:shadow-book transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50">
                <CardHeader className="pb-4">
                  <div className="text-4xl mb-3 text-center">{book.image}</div>
                  <CardTitle className="text-lg line-clamp-2">{book.title}</CardTitle>
                  <CardDescription>{book.author}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs bg-accent px-2 py-1 rounded-full text-accent-foreground">
                      {book.category}
                    </span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-secondary fill-current" />
                      <span className="text-sm ml-1">{book.rating}</span>
                    </div>
                  </div>
                  <Link to={`/book/${book.id}`}>
                    <Button className="w-full" variant="outline">
                      자세히 보기
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/books">
              <Button variant="secondary" size="lg">
                더 많은 도서 보기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-primary py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            지금 시작하세요
          </h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            무료 회원가입으로 수천 권의 도서를 자유롭게 이용하고, 
            개인 맞춤 추천 서비스를 경험해보세요.
          </p>
          <Link to="/register">
            <Button variant="secondary" size="lg" className="text-lg px-8">
              무료로 시작하기
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;