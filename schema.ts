import { defineSchema, defineTable} from "convex/server";
import {v} from "convex/values";

export default defineSchema ({
    users: defineTable({
        userId: v.string(),
        name: v.string(),
        email: v.string(),
        isPro : v.boolean(),
        proSince: v.optional(v.number()),
        lemonsqueezeCustomerId: v.optional(v.string()),
      lemonsqueezeOrderId: v.optional(v.string()),    
    }).index("byUserId", ["userId"]),   
    
      codeExecutions: defineTable({
        userId: v.string(),
        language: v.string(),   
        code: v.string(),
        output: v.optional(v.string()),
        error: v.optional(v.string()),
}) .index("byUserId", ["userId"]),
    snippets: defineTable({
        userId: v.string(),             
        title: v.string(),  
        language: v.string(),
        code: v.string(),
        userName: v.string(),

    }).index("byUserId", ["userId"]),

  snippetComments: defineTable({

    snippetId: v.id("snippets"),
    userId: v.string(),
    userName: v.string(),
    content: v.string(),    
  }).index("bySnippetId", ["snippetId"]),
   stars: defineTable({
    userId : v.id("users"),
    snippetId: v.id("snippets"),

   })

   .index( "byUserId", ["userId"])
   .index("bySnippetId", ["snippetId"])
   .index ("by_user_id_and_snippet_id", ["userId", "snippetId"])



})