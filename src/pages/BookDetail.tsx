import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Star, Calendar, User, BookOpen, Clock, Heart, Share2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const BookDetail = () => {
  const { id } = useParams();

  // Mock book data - in real app, this would come from API/database
  const book = {
    id: 1,
    title: "모던 자바스크립트 Deep Dive",
    author: "이웅모",
    category: "프로그래밍",
    rating: 4.8,
    reviewCount: 124,
    publishYear: 2020,
    publisher: "위키북스",
    isbn: "9791158392239",
    pages: 892,
    available: true,
    image: "📚",
    description: "자바스크립트의 기본 개념과 동작 원리를 상세히 설명하는 완벽 가이드입니다. ES6+의 새로운 기능부터 고급 개념까지 체계적으로 다루며, 실무에서 바로 적용할 수 있는 실용적인 내용으로 구성되어 있습니다.",
    tableOfContents: [
      "1장. 프로그래밍",
      "2장. 자바스크립트란?", 
      "3장. 자바스크립트 개발 환경과 실행 방법",
      "4장. 변수",
      "5장. 표현식과 문",
      "6장. 데이터 타입",
      "7장. 연산자",
      "8장. 제어문"
    ],
    userReviews: [
      {
        id: 1,
        user: "김개발자",
        rating: 5,
        date: "2024-01-15",
        comment: "자바스크립트를 깊이 있게 이해할 수 있는 최고의 책입니다. 개념 설명이 정말 명확해요."
      },
      {
        id: 2,
        user: "박프론트엔드",
        rating: 4,
        date: "2024-01-10", 
        comment: "내용이 방대하지만 체계적으로 잘 정리되어 있어서 학습하기 좋습니다."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/books">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 mr-2" />
              도서 목록으로 돌아가기
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Book Info */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="text-8xl text-center md:text-left">{book.image}</div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <CardTitle className="text-2xl mb-2">{book.title}</CardTitle>
                        <CardDescription className="flex items-center text-base mb-2">
                          <User className="h-4 w-4 mr-2" />
                          {book.author}
                        </CardDescription>
                      </div>
                      <Badge variant={book.available ? "default" : "secondary"} className="text-sm">
                        {book.available ? "대출가능" : "대출중"}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center space-x-6 mb-4">
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-secondary fill-current mr-1" />
                        <span className="font-semibold">{book.rating}</span>
                        <span className="text-muted-foreground ml-1">({book.reviewCount}개의 리뷰)</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{book.publishYear}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">{book.description}</p>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Book Details */}
            <Card>
              <CardHeader>
                <CardTitle>도서 정보</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">출판사:</span>
                    <span className="ml-2">{book.publisher}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">카테고리:</span>
                    <span className="ml-2">{book.category}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">ISBN:</span>
                    <span className="ml-2">{book.isbn}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">페이지:</span>
                    <span className="ml-2">{book.pages}쪽</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Table of Contents */}
            <Card>
              <CardHeader>
                <CardTitle>목차</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {book.tableOfContents.map((chapter, index) => (
                    <div key={index} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {chapter}
                    </div>
                  ))}
                  <div className="text-sm text-muted-foreground">... 및 기타 다수</div>
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card>
              <CardHeader>
                <CardTitle>리뷰 ({book.userReviews.length})</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {book.userReviews.map((review) => (
                  <div key={review.id}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{review.user}</span>
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${i < review.rating ? 'text-secondary fill-current' : 'text-muted-foreground'}`} 
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{review.comment}</p>
                    {review.id !== book.userReviews[book.userReviews.length - 1].id && (
                      <Separator className="mt-4" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Rental Actions */}
          <div className="space-y-4">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  대출 정보
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl mb-2">{book.image}</div>
                  <Badge variant={book.available ? "default" : "secondary"} className="mb-4">
                    {book.available ? "대출가능" : "대출중"}
                  </Badge>
                </div>

                {book.available ? (
                  <div className="space-y-3">
                    <Button className="w-full" size="lg" variant="hero">
                      지금 대출하기
                    </Button>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>대출기간: 14일</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <Button className="w-full" variant="outline" disabled>
                      대출중입니다
                    </Button>
                    <Button className="w-full" variant="secondary">
                      대출 알림 신청
                    </Button>
                  </div>
                )}

                <Separator />

                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon" className="flex-1">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="flex-1">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;