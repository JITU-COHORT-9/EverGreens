"use strict";
// CREATE TABLE Reviews (
//     id VARCHAR(255) PRIMARY KEY,
//     user_id VARCHAR(255) NOT NULL,
//     product_id VARCHAR(255) NOT NULL,
//     rating INTEGER NOT NULL,
//     review VARCHAR(255) NOT NULL,
//     is_deleted BIT NOT NULL DEFAULT 0,
//     created_at DATE NOT NULL DEFAULT GETDATE(),
//     CHECK (rating > 0),
//     CHECK (review <> ''),
//     CHECK (created_at <= GETDATE()),
//     FOREIGN KEY (user_id) REFERENCES users(id),
//     FOREIGN KEY (product_id) REFERENCES products(id),
Object.defineProperty(exports, "__esModule", { value: true });
// );
// create a review model class to be used as a type for the review
class ReviewModel {
    constructor(id, user_id, product_id, rating, review, is_deleted, created_at) {
        this.id = id;
        this.user_id = user_id;
        this.product_id = product_id;
        this.rating = rating;
        this.review = review;
        this.is_deleted = is_deleted;
        this.created_at = created_at;
    }
}
exports.default = ReviewModel;
